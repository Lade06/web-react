import logo from "./logo.svg";
import "./App.css";
import images1 from "./Assets/a1.jpg";
import images2 from "./Assets/bag2.jpg";
import images3 from "./Assets/addidas.jpg";
import images4 from "./Assets/shoe.jpg";
import images5 from "./Assets/lappy.jpg";
import {FaCartPlus} from "react-icons/fa6";

function App() {
  return (
    <div>
      {
        // this is navbar section
        <div>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark navbar-fixed-top">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                <h1><span>S</span>hop<span>N</span>ow</h1>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mynavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Contact
                    </a>
                  </li>
                </ul>
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="text"
                    placeholder="Search"
                  />
                  <button className="btn btn-primary" type="button">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      }

      {
        // landing page section

        <div>
          <div className="landingpage">
            <section>
              <div className="container">
                <div className="row">
                  <div className="col-md-2"></div>
                  <div className="col-md-8 text-white">
                    <div className="text-center mt-5 ">
                      <h1 className="titleHead">
                        WELCOME TO <br /> WOMEN DEVELOPMENT CENTER
                      </h1>
                      <button className="btn btn-primary">Explore Now</button>
                      <div className="text-center mt-5 text-black">
                        <h1 className="store">SHOP</h1> 
                        <FaCartPlus size="3em" color="blue"  className="iconn "/>
                        
                      </div>
                      <div className="pic text-black">
                      <div>
                          <img src={images1} alt="" className="pic" />
                          <p>
                            Smart Backpack Backpack Set <br /> Laptop Bag
                          </p>
                          <p>#19,999</p>
                          <button className="btn btn-primary">Buy Now</button>
                        </div>

                        <div>
                          <img src={images2} alt="" className="pic" />
                          <p>
                            EILIFINTE 3 IN 1 Unisex Bag <br /> Backpack Set
                          </p>
                          <p>#10,000</p>
                          <button className="btn btn-primary">Buy Now</button>
                        </div>

                        <div>
                          <img src={images3} alt="" className="pic" />
                          <p>
                          ADIDAS Core Sneakers Grand Court Base
                          </p>
                          <p>#10,000</p>
                          <button className="btn btn-primary">Buy Now</button>
                        </div>

                        <div>
                          <img src={images2} alt="" className="pic" />
                          <p>EILIFINTE 3 IN 1 Unisex Bag <br /> Backpack Set</p>
                          <p>#28,000</p>
                          <button className="btn btn-primary">Buy Now</button>
                      </div>

                      <div>
                          <img src={images4} alt="" className="pic" />
                          <p>Elegant Black Leather Shoe For Men</p>
                          <p>#43,000</p>
                          <button className="btn btn-primary">Buy Now</button>
                        </div>
                        
                      <div>
                          <img src={images5} alt="" className="pic" />
                          <p>Hp Stream 11 Intel Celeron 4GB RAM- 64GB <br /></p>
                          <p>#95,900</p>
                          <button className="btn btn-primary">Buy Now</button>
                        </div>

                    </div>
                  </div>
                  <div className="col-md-2"></div>
                </div>
              </div>
              </div>
            </section>
          </div>
        </div>
      }
  
    </div>
  );
}

export default App;
