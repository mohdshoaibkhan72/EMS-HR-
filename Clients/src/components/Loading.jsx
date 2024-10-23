const Loading = () => {
  return (
    <div className="loading-page">
      <img
        src="https://res.cloudinary.com/dzmu2pbjn/image/upload/v1729143479/fk99xtxngnikhnbs0dcc.png"
        alt="Logo"
        className="logo"
      />
      <div className="loading-text">Loading</div>
      <div className="dots">
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>

      <style jsx>{`
        .loading-page {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: white;
          font-family: Arial, sans-serif;
        }

        .logo {
          width: 150px;
          height: auto;
          margin-bottom: 20px;
          animation: pulse 2s infinite;
        }

        .loading-text {
          font-size: 1.5rem;
          color: #007bff; /* Match logo color */
        }

        .dots {
          font-size: 2rem;
          color: #007bff;
          margin-top: 10px;
        }

        .dots span {
          animation: blink 1.2s infinite;
        }

        .dots span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .dots span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes blink {
          0%,
          20% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;
