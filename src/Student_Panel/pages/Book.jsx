import React from "react";

const BookAnimation = () => {
  return (
    <>
      <style>{`
        .book-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #e0f2f1; /* light teal background */
        }

        .book {
          position: relative;
          width: 120px;
          height: 160px;
          perspective: 1000px;
        }

        .cover,
        .pages {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 6px;
          backface-visibility: hidden;
        }

        .cover {
          background-color: #014d4e; /* dark teal cover */
          transform-origin: left;
          transition: transform 1s ease-in-out;
        }

        .cover.front {
          z-index: 3;
        }

        .cover.back {
          background-color: #006666;
          z-index: 1;
        }

        .pages {
          background-color: #ffffff;
          z-index: 2;
        }

        .book:hover .cover.front {
          transform: rotateY(-150deg);
        }
      `}</style>

      <div className="book-container">
        <div className="book">
          <div className="cover front"></div>
          <div className="pages"></div>
          <div className="cover back"></div>
        </div>
      </div>
    </>
  );
};

export default BookAnimation;
