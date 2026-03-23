# Return Materials System

A web-based system for managing material returns using QR codes.

## Features
- Production tab for scanning and sending materials to inventory.
- Warehouse tab for confirming pending returns.
- Lookup and Reporting functionality.

## Deployment
This project is set up for [Vercel](https://vercel.com). Just connect your GitHub repository to Vercel and it will be deployed as a static site.

### Backend Configuration (Google Apps Script)
Since this app is hosted on Vercel, it communicates with Google Apps Script via `fetch()`. Your Apps Script must be deployed as a **Web App** with:
- **Execute as**: Me (Your account)
- **Who has access**: Anyone

#### Suggested `doPost(e)` in Apps Script:
```javascript
function doPost(e) {
  var params = JSON.parse(e.postData.contents);
  var action = params.action;
  var result;
  
  if (action === 'getOrder') {
    result = getOrder(params.rpro);
  } else if (action === 'submitReturn') {
    result = submitReturn(params.data);
  } else if (action === 'getPendingOrders') {
    result = getPendingOrders();
  } else if (action === 'confirmOrder') {
    result = confirmOrder(params.row);
  } else if (action === 'lookupRPRO') {
    result = lookupRPRO(params.rpro);
  } else if (action === 'getReportData') {
    result = getReportData(params.fromDate, params.toDate);
  } else if (action === 'exportReportToExcel') {
    result = exportReportToExcel(params.fromDate, params.toDate);
  }
  
  return ContentService.createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}
```
