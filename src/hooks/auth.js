import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth, db } from "firebase-auth";
import { useState, useEffect } from "react";
import { LOGIN, STUDENT } from "Route/routes";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import isEmailExists from "components/credentials/EmailExists";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { setDoc, doc, getDoc } from "firebase/firestore";

export default function useAuth() {
  const [authUser, authLoading, error] = useAuthState(auth);
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const ref = doc(db, "users", authUser.uid);
      const docSnap = await getDoc(ref);
      setUser(docSnap.data());
      setLoading(false);
    }

    if (!authLoading) {
      if (authUser) {
        fetchData();
      } else {
        setLoading(false);
      }
    }
  }, [authLoading, authUser]);

  return { user, isLoading, error };
}

export function useLogin() {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  async function login({ email, password, redirectTo = STUDENT }) {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: "You are logged in",
        status: "success",
        isClosable: true,
        position: "top",
        duration: 2000,
      });
      navigate(redirectTo);
    } catch (error) {
      toast({
        title: "Logging in failed",
        description: error.message,
        status: "error",
        isClosable: true,
        position: "top",
        duration: 2000,
      });
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  return { login, isLoading };
}

export function useRegister() {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  async function register({ username, email, password, redirectTo = LOGIN }) {
    setLoading(true);

    const emailExists = await isEmailExists(email);
    if (emailExists) {
      toast({
        title: "Email already registered",
        status: "error",
        isClosable: true,
        position: "top",
        duration: 2000,
      });
      setLoading(false);
    } else {
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);

        await setDoc(doc(db, "users", res.user.uid), {
          id: res.user.uid,
          username: username.toLowerCase(),
          avatar: "",
          date: Date.now(),
        });
        toast({
          title: "You are registered in",
          description: "Please Login in your account",
          status: "success",
          isClosable: true,
          position: "top",
          duration: 2000,
        });
        navigate(redirectTo);
      } catch (error) {
        toast({
          title: "Signing up failed",
          description: error.message,
          status: "error",
          isClosable: true,
          position: "top",
          duration: 2000,
        });
      } finally {
        setLoading(false);
      }
    }
  }

  return { register, isLoading };
}

export function useLogout() {
  const [signOut, isLoading] = useSignOut(auth);
  const toast = useToast();
  const navigate = useNavigate();

  async function logout() {
    if (await signOut()) {
      toast({
        title: "Successfully logged out",
        status: "success",
        isClosable: true,
        position: "top",
        duration: 2000,
      });
      navigate(LOGIN);
    }
  }
  return { logout, isLoading };
}
