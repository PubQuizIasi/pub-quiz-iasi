export enum ResponseCodes {
  GAME_CREATED_SUCCESSFULLY = 'GAME_CREATED_SUCCESSFULLY',
  GAME_UPDATED_SUCCESSFULLY = 'GAME_UPDATED_SUCCESSFULLY',
  GAME_DELETED_SUCCESSFULLY = 'GAME_DELETED_SUCCESSFULLY',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  WRONG_CREDENTIALS = 'WRONG_CREDENTIALS',
  CREDENTIALS_REQUIRED = 'CREDENTIALS_REQUIRED',
  SEASON_OR_GAME_NOT_FOUND = 'SEASON_OR_GAME_NOT_FOUND',
  GAME_ALREADY_EXISTS = 'GAME_ALREADY_EXISTS',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  USERNAME_ALREADY_EXISTS = 'USERNAME_ALREADY_EXISTS',
  EMAIL_ALREADY_EXISTS = 'EMAIL_ALREADY_EXISTS',
  EMAIL_SENT_SUCCESSFULLY = 'EMAIL_SENT_SUCCESSFULLY',
  EMAIL_NOT_SENT = 'EMAIL_NOT_SENT',
}

export const emailTemplate = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 20px auto;
        background-color: #fff;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      h1 {
        color: #333;
        text-align: center;
      }
      p {
        color: #666;
        font-size: 16px;
        line-height: 1.6;
        margin-bottom: 10px;
      }
      .message {
        background-color: #f9f9f9;
        border-left: 6px solid #007bff;
        padding: 10px;
        margin-top: 20px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Contact</h1>
      <p><strong>Name:</strong> {{name}}</p>
      <p><strong>Email:</strong> {{email}}</p>
      <div class="message">
        <p><strong>Message:</strong></p>
        <p>{{message}}</p>
      </div>
    </div>
  </body>
</html>
`;
