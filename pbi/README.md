# Power BI custom Connector
Power BI custom connector provides an easy way to fetch data from our API and create custom reports in Power BI.

### Usage
Create a folder with the following path if it does not exist:
`\User\Documents\Microsoft Power BI Desktop\Custom Connectors` and copy the file `CustomConnectors/pbi/debug/TelematicsAPI.mez` in that folder.
Start Power BI Desktop and from `Options -> Security -> Data Extensions` 
select `Allow any extension to load without validation or warning`

Select `Get data` and you will find `TelematicsAPI (Beta)` extension. To complete the configuration you will need to provide 
the API Endpoint and API Key (obtained from the our support). When the configuration is complete you will have access
to a subset of (read-only) endpoints of the API. Keep in mind that some data might require some
transformation (expanding nested objects, data conversion) before being usable from Power BI visualization tools. 

### Build requirements
Building the project requires Visual Studio and the [Power Query SDK](https://marketplace.visualstudio.com/items?itemName=Dakahn.PowerQuerySDK).

### Disclaimer
Please note that this is a beta version of the Power BI TelematicsAPI Custom Connector which is
still undergoing final testing. The connector and all content found in this repository are provided on an
"as is" and "as available" basis.
