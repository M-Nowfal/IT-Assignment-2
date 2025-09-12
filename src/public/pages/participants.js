const participantsPage = (participants) => {
  return (
    `<!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="shortcut icon" href="https://gacbe.ac.in/images/image1.png" type="image/png">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
      integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
      crossorigin="anonymous" referrerpolicy="no-referrer" />
      <title>Participants</title>
      <style>
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          transition: 0.25s;
        }
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          width: 100%;
          overflow-x: hidden;
        }
        h1 { color: #333; text-align: center; }
        h2 { color: purple; }
        h3 { color: #0084ffff; }
        p { color: #666; }
        .participants {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          padding: 15px;
          justify-content: center;
        }
        .participants-card {
          display: flex;
          flex-direction: column;
          gap: 12px;
          background-color: #fff;
          border: 1px solid #ddd;
          border-left: 5px solid #ff6b26;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          padding: 20px 10px;
          flex-grow: 1;
          min-width: 400px;
          text-align: start;
        }
        .participants-card:hover {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          transform: translateY(-5px);
        }
        .user-icon { 
          color: #9e3200ff; 
          background-color: #b4b4b4ff;
          padding-top: 7px;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          margin-bottom: 5px;
        }
        a {
          position: fixed;
          bottom: 30px;
          right: 20px;
          text-decoration: none;
          color: white;
          background-color: purple;
          padding: 10px 15px;
          border-radius: 30px;
          z-index: 10;
          box-shadow: 0px 0px 20px gray;
          font-size: small;
        }
      </style>
    </head>

    <body>
      <h1 style="margin-top: 20px;">Participants List</h1>
      <div class="participants">
        ${participants.map(participant => `
          <div class="participants-card">
            <h2>
              <i class="fa-solid fa-user user-icon"></i>
              ${participant.full_name}
            </h2>
            <h3>${participant.id}</h3>
            <p>
              <i class="fa-solid fa-graduation-cap"></i>
              ${participant.dep}
            </p>
            <p>
              <i class="fa-solid fa-calendar-days"></i>  
              ${participant.yos}
            </p>
            <p>
              <i class="fa-solid fa-envelope"></i>
              ${participant.email}
            </p>
            <p>
              <i class="fa-solid fa-phone"></i>
              ${participant.phone}
            </p>
            <p>
              <i class="fa-solid fa-code"></i>
              ${participant.lang}
            </p>
        </div>  
        `)}
      </div>
      <a href="/">Back</a>
    </body>
    </html>`
  );
};

export default participantsPage;
