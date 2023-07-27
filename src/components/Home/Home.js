/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "@chakra-ui/react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "components/css/style.css";
import { Link as RouterLink } from "react-router-dom";
import TCS from "assets/TCS.png";
import infosys from "assets/infosys.jpg";
import ibm from "assets/IBM.png";
import hp from "assets/hp.png";
import google from "assets/google.png";
import oracle from "assets/oracle.png";
import research from "assets/research.avif";
import internships from "assets/Internships.avif";
import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import hackathon from "assets/hackathon.jpg";
import { LOGIN, ADMINLOG } from "Route/routes";

const Home = () => {
  return (
    <div>
      <Flex
        as="header"
        align="center"
        justify="space-between"
        py={4}
        px={6}
        bg="lightblue"
        color="white"
      >
        <Text fontSize="xl" fontWeight="bold">
          Placement Portal
        </Text>
        <Box mr="4">
          <Text>
            <Icon as={AiOutlineUser} boxSize="4" mr="2" />
            <Link
              as={RouterLink}
              to={LOGIN}
              color="teal.880"
              fontWeight="medium"
              textDecor="underline"
              _hover={{ background: "teal.100" }}
            >
              Student{" "}
            </Link>
          </Text>

          <Link
            as={RouterLink}
            to={ADMINLOG}
            color="teal.880"
            fontWeight="medium"
            textDecor="underline"
            _hover={{ background: "teal.100" }}
          >
            <Icon as={AiOutlineUser} boxSize="4" mr="2" />
            Admin
          </Link>
        </Box>
      </Flex>

      <div>
        <section className="bannerBgImage">
          <div className="row">
            <div className="col-md-12 bannerText">
              <h2 className="bannerTitle"> Placement</h2>
              <p className="bannerDesc">
                {" "}
                -The act of placing something in a particular position,{" "}
                <br></br>or the position of something
              </p>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section>
          <div className="container-xxl py-5">
            <div className="container">
              <h2>Company Contacts</h2>

              <h1 className="display-4 mb-6 text-center p-5 ">
                Companies that offer placements every year
              </h1>
              <div className="row g-4">
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="service-item position-relative h-100">
                    <div className="card h-100">
                      <div className="service-text rounded p-5">
                        <img className="img-fluid" src={TCS} alt="Icon"></img>
                        <br></br>
                        <h5 className="mb-3 text-center">
                          Tata Consultancy Services
                        </h5>
                        <p className="mb-0 text-center">
                          Leading Through Legacy | Tata group.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="service-item position-relative h-100">
                    <div className="card h-100">
                      <div className="service-text rounded p-5">
                        <img
                          className="img-fluid"
                          src={infosys}
                          alt="Icon"
                        ></img>
                        <br></br>
                        <h5 className="mb-3 text-center">Infosys</h5>
                        <p className="mb-0 text-center">Navigate Your Next</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="service-item position-relative h-100">
                    <div className="card h-100">
                      <div className="service-text rounded p-5">
                        <img className="img-fluid" src={ibm} alt="Icon"></img>
                        <br></br>
                        <h5 className="mb-3 text-center">
                          International Business Machines
                        </h5>
                        <p className="mb-0 text-center">
                          Think. Let's Build a Smarter Planet
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="service-item position-relative h-100">
                    <div className="card h-100">
                      <div className="service-text rounded p-5">
                        <img className="img-fluid" src={hp} alt="Icon"></img>
                        <br></br>
                        <h5 className="mb-3 text-center">Hewlett-packard</h5>
                        <p className="mb-0 text-center">Make it matter</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="service-item position-relative h-100">
                    <div className="card h-100">
                      <div className="service-text rounded p-5">
                        <img
                          className="img-fluid"
                          src={google}
                          alt="Icon"
                        ></img>
                        <br></br>
                        <h5 className="mb-3 text-center">GOOGLE</h5>
                        <p className="mb-0 text-center">
                          Don't be evil; Do the right thing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="service-item position-relative h-100">
                    <div className="card h-100">
                      <div className="service-text rounded p-5">
                        <img
                          className="img-fluid"
                          src={oracle}
                          alt="Icon"
                        ></img>
                        <br></br>
                        <h5 className="mb-3 text-center">Oracle</h5>
                        <p className="mb-0 text-center">
                          Runs faster. Costs less. And never breaks
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <div className="container-xxl pt-5">
          <div className="container">
            <p className="fs-5 fw-medium  text-center text-primary">
              <h2>Our Projects</h2>
            </p>
            <h1 className="display-5 mb-5 text-center">
              We've Done Lot's of Awesome Projects
            </h1>
            <div className="row">
              <div className="col-md-4">
                <div className=" card mb-3">
                  <img src={research} class="card-img-top" alt=".." />
                  <div className="card-body">
                    <h5 className="card-title">Research in Aboard</h5>
                    <p className="card-text ">
                      college will provide research in other countries
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className=" card mb-3">
                  <img src={internships} class="card-img-top" alt=".." />
                  <div className="card-body">
                    <h5 className="card-title">Internship opportunities</h5>
                    <p className="card-text">
                      Internships opportunities are provided for students
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 h-100">
                <div className=" card mb-3">
                  <img src={hackathon} class="card-img-top" alt=".." />
                  <div className="card-body">
                    <h5 className="card-title">Hackathons</h5>
                    <p className="card-text">
                      Students taking part in different hackathons
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid bg-dark footer mt-5 py-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Our Office</h4>
              <p className="mb-2 text-white">
                <i class="fa fa-map-marker-alt me-3"></i>123 Street, Hyderabad,
                INDIA
              </p>
              <p className="mb-2 text-white">
                <i class="fa fa-phone-alt me-3"></i>+012 345 67890
              </p>
              <p className="mb-2 text-white">
                <i class="fa fa-envelope me-3"></i>info@example.com
              </p>
              <div className="d-flex pt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="30"
                  fill="currentColor"
                  class="bi bi-twitter text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="30"
                  fill="currentColor"
                  class="bi bi-linkedin text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="55"
                  height="30"
                  fill="currentColor"
                  class="bi bi-youtube text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="55"
                  height="30"
                  fill="currentColor"
                  class="bi bi-whatsapp text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <h4 class="text-white mb-4">Quick Links</h4>
              <a class="btn btn-link text-white">About Us</a>
              <a class="btn btn-link text-white">Contact Us</a>
              <a class="btn btn-link text-white">Our Services</a>
              <a class="btn btn-link text-white">Terms & Condition</a>
              <a class="btn btn-link text-white">Support</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
