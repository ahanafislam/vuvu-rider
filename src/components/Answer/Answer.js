import React from 'react';

const Answer = () => {
    return (
        <div className="container mt-5 mb-5 p-md-5">
            <h2 className="text-center mt-3 mb-3">Some Questions Answer</h2>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        How does react work?
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">React is a javascript library used for creating UI. Everything in react is a component. When we create a component React creates a virtual DOM like browser DOM. This DOM completely looks like real DOM but it's actually a Javascript object. React builds this virtual DOM in such a way that any element can be easily modified using JavaScript with this DOM. React create two virtual DOM. When a user takes any action in DOM, React keeps the change in one DOM and saves the older DOM in another virtual DOM. Then compare these two DOM that which element is specifically changed. After that react don't re-render the whole DOM. It’s changed Only that element that user was changed.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    What is the difference between props and state?
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <p>The difference between props and state are shown below.</p>
                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th scope="col">Props</th>
                                <th scope="col">State</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>We can pass any data or function from one component to other components using props.</td>
                                <td>State can holds data on same component. So we can not pass data by using it.</td>
                              </tr>
                              <tr>
                                <td>We can not change the props value. That mean it's read-only.</td>
                                <td>State can change it's value asynchronously.</td>
                              </tr>
                              <tr>
                                <td>We can access props from child component.</td>
                                <td>We can not access state from child component.</td>
                              </tr>
                              <tr>
                                <td>With the help of props we can make a components reusable.</td>
                                <td>We can not make a component reusable by using state.</td>
                              </tr>
                              <tr>
                                <td>Props is immutable.</td>
                                <td>State is mutable.</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Answer;