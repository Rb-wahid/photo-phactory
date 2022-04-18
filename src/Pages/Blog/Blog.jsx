import React from "react";

const Blog = () => {
  return (
    <div className=" max-w-7xl m-auto mt-12 text-justify">
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
          <h2 class="accordion-header mb-0" id="flush-headingOne">
            <button
              class="accordion-button
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-xl text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Difference between authorization and authentication
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse border-0 collapse show"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body py-4 px-5">
              <div>
                <p>
                  <string className="font-semibold">Authentication:</string>
                </p>
                <ol>
                  <li>1. Authentication verifies who the user is.</li>
                  <li>2. It is usually performed before the authorization.</li>
                  <li>
                    3. It requires the login details of the user, such as user
                    name & password, etc.
                  </li>
                  <li>4. Data is provided through the Token Ids.</li>
                </ol>
              </div>
              <br />
              <div>
                <p>
                  <string className="font-semibold">Authorization:</string>
                </p>
                <ul>
                  <li>
                    1. Authorization determines what resources a user can
                    access.
                  </li>
                  <li>
                    2. It is usually done once the user is successfully
                    authenticated.
                  </li>
                  <li>
                    3. It requires the user's privilege or security level.
                  </li>
                  <li>4. Data is provided through the access tokens.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
          <h2 class="accordion-header mb-0" id="flush-headingTwo">
            <button
              class="accordion-button
    collapsed
    relative
    flex
    items-center
    w-full
    py-4
    px-5
 text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none text-xl"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Why are you using firebase? What other options do you have to
              implement authentication?
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse border-0 collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body py-4 px-5 text-justify">
              <p className="">
                Firebase is a less technical and time-saving alternative to
                writing backend code for dynamic apps. We can host our app to
                firebase and can manage our app in the cloud.Google Cloud
                service, it also gives you access to other Google products and
                features, like Google Drive and Sheets.
              </p>

              <p>
                It is a complete package of products that allows to build web
                and mobile apps and It's simple to use built-in third-party
                authentication providers, including Google, Facebook, Twitter.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
          <h2 class="accordion-header mb-0" id="flush-headingThree">
            <button
              class="accordion-button
    collapsed
    relative
    flex
    items-center
    w-full
    py-4
    px-5
     text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none text-xl"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              What other services does firebase provide other than
              authentication?
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body py-4 px-5">
              <p>
                Firebase is a full package that can help in developing your
                mobile or web applications faster with fewer resources and more
                efficiency.
              </p>
              <br />
              <h2 className="text-xl">
                Most useful services which Firebase provides:
              </h2>
              <ul>
                <li>
                  1. Cloud Messaging : Firebase is a great tool to implement
                  notifications, irrespective of the platform because it is
                  fast, reliable, and scalable to handle our requests.
                </li>
                <li>
                  2. Authentication: Firebase provides authentication services
                  for almost every major platform, which includes Google,
                  Facebook, Twitter, Apple, Github, Microsoft, and
                  Yahoo.Firebase provides authentication using email, password,
                  and phone number using OTP, and it is also free!!!
                </li>
                <li>
                  3. Google Analytics: The service provides visualization of all
                  this information on just a single tap. It helpful in tracking
                  user demographics, behavior, purchasing patterns, revenue
                  reports.
                </li>
                <li>
                  Remote Config: It helps in remotely changing your application
                  UI and content, without publishing it again.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
