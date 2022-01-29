import { useState, useEffect } from "react";

const MAX_COUNTER1 = 2;
const MAX_COUNTER2 = 20;
const MAX_COUNTER3 = 100;

export const Counter = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

  useEffect(() => {
    let timer;
    if (counter1 < MAX_COUNTER1) {
      timer = setTimeout(() => {
        setCounter1((prev) => prev + 1);
      }, 50);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [counter1]);

  useEffect(() => {
    let timer;
    if (counter2 < MAX_COUNTER2) {
      timer = setTimeout(() => {
        setCounter2((prev) => prev + 1);
      }, 100);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [counter2]);

  useEffect(() => {
    let timer;
    if (counter3 < MAX_COUNTER3) {
      timer = setTimeout(() => {
        setCounter3((prev) => prev + 1);
      }, 100);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [counter3]);

  return (
    <>
      <div className="container container-nested margin-bottom">
        <div id="counter" className="col lg-6 xs-12">
          <div className="heading-beta is-xthin">
            <span data-count="22" className="counter-value">
              {counter1}
            </span>
            +<span className="font-size-normal"></span>
          </div>
          <div className="pre-title">African Countries</div>
        </div>
        <div className="col lg-6 xs-12">
          <div className="heading-beta is-xthin">
            <span data-count="1200" className="counter-value">
              {counter2}
            </span>
            +<span className="font-size-normal"></span>
          </div>
          <div className="pre-title">Innovative Startups & Companies </div>
        </div>
      </div>
      <div className="container container-nested">
        <div className="col lg-6 xs-12">
          <div className="heading-beta is-xthin">
            <span data-count="100" className="counter-value">
              {counter3}
            </span>
            +<span className="font-size-normal"></span>
          </div>
          <div className="low-text-contrast pre-title">
            {" "}
            Experienced & accessible African Business Lawyers
          </div>
        </div>
        <div className="col lg-6 xs-12"></div>
      </div>
    </>
  );
};
