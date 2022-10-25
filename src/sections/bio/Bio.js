import { useEffect, useRef, useState } from "react";

import pics from "./pics";
import styles from "./Bio.module.css";

const lengths = ["Short", "Medium", "Long"];

export default function Bio() {
  const [bioLength, setBioLength] = useState("short");

  const prevBioLength = useRef();

  useEffect(() => {
    prevBioLength.current = bioLength;
  }, [bioLength]);

  useEffect(() => {
    let i = 0;

    let changePic = setInterval(() => {
      if (i >= pics.length) i = 0;
      pic.current.style.backgroundImage = `url(${pics[i]})`;

      i++;
    }, 6000);
    return () => clearInterval(changePic);
  }, []);

  const lengthHandler = (e) => {
    setBioLength(e.target.value.toLowerCase());
  };

  const pic = useRef();

  return (
    <div className="section fadeIn">
      <div className={`flex-col section`}>
        <h2 className="page-header">About Me</h2>

        {/* Bio section */}
        <div className={styles["bio-container"]}>
          <div className={`flex-col ${styles["bio-info"]}`}>
            {/* selectors */}
            <ul className={styles["length-container"]}>
              {lengths.map((length, i) => (
                <li key={length} className={styles["selection-container"]}>
                  <input
                    defaultChecked={i === 0}
                    type="radio"
                    name="length"
                    id={length}
                    value={length}
                    className={styles.dots}
                    onClick={lengthHandler}
                  />
                  <label htmlFor={length}>{length}</label>
                </li>
              ))}
            </ul>
            {/* bio text */}
            <div>
              <p>
                I am a front-end developer who was born and raised in Hawaii.
                Being naturally curious and creative, I have found web
                development to be an excellent fit for me.
              </p>
              {bioLength === "medium" || bioLength === "long" ? (
                <p
                  className={
                    prevBioLength.current === "short" ? styles["bio-fade"] : ""
                  }
                >
                  I have lived abroad for a total of 10 years and am proficient
                  in two foreign languages, which helps me know exactly what I
                  need in order to learn languages, including programming
                  languages. This along with my 8 years of teaching experience
                  has helped me hone my communication skills, making me a
                  valuble team member.
                </p>
              ) : (
                ""
              )}

              {bioLength === "long" && (
                <p
                  className={
                    prevBioLength.current === "short" ||
                    prevBioLength.current === "medium"
                      ? styles["bio-fade"]
                      : ""
                  }
                >
                  My hobbies include weightlifting and playing video games. I've
                  found weightlifting to be great for molding not only the
                  physical body, but the mind as well. It has taught me how
                  important qualities such as keeping to a routine, consistantly
                  improving, and producing quality work can be. Video games have
                  taught me how to look at how to improve myself rather than to
                  blame outside forces for failure.
                </p>
              )}
            </div>
          </div>
          {/* bio pictures */}
          <div ref={pic} className={styles.pictures}></div>
        </div>
      </div>
    </div>
  );
}
