import React from 'react';

const Blog = () => {
  return (
    <div>
      <div className='w-4/5 mx-auto pl-10 py-8 border  mt-10  shadow-xl mb-5 rounded-xl'>
        <h1 className='text-xl font-medium text-[#028090] mb-3'>Q. what is cors??</h1>
        <p className='text-lg font-normal pl-4'>“CORS” stands for Cross-Origin Resource Sharing. It allows you to make requests from one website to another website in the browser, which is normally prohibited by another browser policy called the Same-Origin Policy (SOP). <br /> To instruct the browser to expose server responses to a HTTP requests from certain origin, the web server must respond to the request with an additional HTTP response header. <br />  for DELETE and PUT request, ‘unsafe’ requests which may impact the server’s data, or GET, HEAD and POST requests with customized headers, the browser will send a “preflight” request to find out the CORS result prior to sending the actual request (only if the preflight response determines access is permitted)..</p>
      </div>
      <div className='w-4/5 mx-auto pl-10 py-8 border  mt-10  shadow-xl mb-5 rounded-xl'>
        <h1 className='text-xl font-medium text-[#028090] mb-3'>Q. Why are you using firebase? What other options do you have to implement authentication?</h1>
        <p className='text-lg font-normal pl-4'> Firebase is a product of google. i am using it for hosting my sites and for a secured authentication process. the management of data is a tough process. so i am trusting google with my datas.<br />
          Other authentication option  other than firebase are: <br /> 1. Okta. <br />2. Auth0. <br />3.MongoDB. <br />4.JSON web token. </p>
      </div>
      <div className='w-4/5 mx-auto pl-10 py-8 border  mt-10  shadow-xl mb-5 rounded-xl'>
        <h1 className='text-xl font-medium text-[#028090] mb-3'>Q. How does the private route work?</h1>
        <p className='text-lg font-normal pl-4'>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).<br /> We have to Wrap a component with the private route that has the condition with showing the children or redirecting to the login page.<br /> lazy loading option an also be implemented . </p>
      </div>

      <div className='w-4/5 mx-auto pl-10 py-8 border  mt-10  shadow-xl mb-5 rounded-xl'>
        <h1 className='text-xl font-medium text-[#028090] mb-3'>Q. What is Node? How does Node work?</h1>
        <p className='text-lg font-normal pl-4'>Node is a runtime of javascript. <br /> <span className='text-orange-400'>Node.JS= Runtime Environment+ Javascript Library.</span>
          <br /> Node has some special features:
          <br />
          1.Node is asynchronous and Event driven. <br />
          2. It is very Fast. <br />
          3.Single threaded but Highly scalable.
          <br />4. No buffering.
        </p>
      </div>
    </div>
  )
};

export default Blog;