module.exports =()=>{
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./index.css" />
        <title>Project Report</title>
        <style>
          * {
            margin: 0;
            padding: 0;
          }
          body {
            display: flex;
            justify-content: center;
            background-color: grey;
            font-family: arial, sans-serif;
          }
          table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
          }
    
          td,
          th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
          }
    
          table.statsTable {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 30%;
            margin: 20px 0px;
          }
    
          table.statsTable th:nth-of-type(even) {
            font-size: 15px;
            text-align: center;
            font-weight: 100;
          }
          .reportContainer {
            width: 900px;
            height: 100vh;
            background-color: white;
            padding: 20px;
          }
    
          .reportHeader {
            width: 100%;
            text-align: center;
            margin-bottom: 40px;
          }
    
          .reportInfo {
            width: 100%;
            display: flex;
            margin-top: 20px;
            height: 120px;
          }
    
          .reportInfo span {
            font-size: 18px;
            font-weight: 600;
          }
    
          .reportInfo label {
            font-size: 18px;
            font-weight: 200;
          }
    
          .reportLeftInfo {
            flex: 7;
            display: flex;
            flex-direction: column;
            text-align: left;
            justify-content: space-around;
          }
    
          .reportRightInfo {
            flex: 4;
            display: flex;
            flex-direction: column;
            text-align: right;
            justify-content: space-around;
            height: 70px;
          }
        </style>
      </head>
      <body>
        <div class="reportContainer">
          <div class="reportHeader">
            <h1><u>Project 1 Report</u></h1>
            <div class="reportInfo">
              <div class="reportLeftInfo">
                <span>Client's Name: <label>Sugam Kumar Yadav</label></span>
                <span>Client's Email: <label>abc@gmail.com</label></span>
                <span>Entity's Name: <label>Roshan Sharma</label></span>
                <span>Entity's Email: <label>def@gmail.com</label></span>
              </div>
              <div class="reportRightInfo">
                <span>From: <label>12-11-2023</label></span>
                <span>Till: <label>22-11-2023</label></span>
              </div>
            </div>
          </div>
          <div class="reportTable">
            <table>
              <tr>
                <th>Task Name</th>
                <th>Task Status</th>
                <th>Task Hours</th>
                <th>Task Cost</th>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
                <td>Mexico</td>
              </tr>
              <tr>
                <td>Ernst Handel</td>
                <td>Roland Mendel</td>
                <td>Austria</td>
                <td>Austria</td>
              </tr>
              <tr>
                <td>Island Trading</td>
                <td>Helen Bennett</td>
                <td>UK</td>
                <td>UK</td>
              </tr>
              <tr>
                <td>Laughing Bacchus Winecellars</td>
                <td>Yoshi Tannamuri</td>
                <td>Canada</td>
                <td>Canada</td>
              </tr>
              <tr>
                <td>Magazzini Alimentari Riuniti</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
                <td>Italy</td>
              </tr>
            </table>
          </div>
          <div class="reportFooter">
            <div class="reportStats">
              <table class="statsTable">
                <tr>
                  <th>Total Tasks</th>
                  <th>6</th>
                </tr>
                <tr>
                  <th>Total Hours</th>
                  <th>66</th>
                </tr>
                <tr>
                  <th>Pending Tasks</th>
                  <th>4</th>
                </tr>
                <tr>
                  <th>Finished Tasks</th>
                  <th>7</th>
                </tr>
                <tr>
                  <th>WIP Tasks</th>
                  <th>3</th>
                </tr>
                <tr>
                  <th>Not Started Tasks</th>
                  <th>3</th>
                </tr>
                <tr>
                  <th>Total Cost</th>
                  <th>$1500</th>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </body>
    </html>
    `
}