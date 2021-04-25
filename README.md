# Microsoft Power BI Custom Data Connectors
This is a repository of custom data connectors to Power BI developed by [max-zorn](https://github.com/max-zorn)

## The Telematics API Connector

This Custom Connector allows you to get and visualize data from the following API methods:
- CompareScoring
- CrashList
- Vouchers
- ScoringReview

### Tutorial

Step 1: Get the key and domain for your API account

Step 2: Download TelematicsAPI.mez file from [telematics-pbi-connector/debug](https://github.com/novemdata/telematics-pbi-connector/tree/main/debug) folder in this repository

Step 3: Copy this file under C:\Users\\\<Your_User_Name>\\Documents\Microsoft Power BI Desktop\Custom Connectors

*If the folders do not exist, create them

Step 4: Open Power BI Desktop, set "(Not recommended) Allow any..." under Options/Data Extensions 

<img width="674" alt="image" src="https://user-images.githubusercontent.com/40857648/116013033-9ac55300-a636-11eb-9ee5-36c9fcffb99d.png">

Step 5: Restart Power BI Desktop and navigate to "Get Data"

<img width="1847" alt="image" src="https://user-images.githubusercontent.com/40857648/116012985-55a12100-a636-11eb-941f-0d7153e0daf6.png">

Step 6: Find "TelematicsAPI (Beta) and select it

<img width="606" alt="image" src="https://user-images.githubusercontent.com/40857648/116013190-7cac2280-a637-11eb-938c-7356873abb14.png">

Step 7: Input domain of your API account

<img width="707" alt="image" src="https://user-images.githubusercontent.com/40857648/116013284-0e1b9480-a638-11eb-8610-9f49b2303871.png">

Step 8: Input API key of your account

<img width="707" alt="image" src="https://user-images.githubusercontent.com/40857648/116013324-4cb14f00-a638-11eb-9e4d-c559fbadf8a7.png">

Step 9: You can now select objects from your account and either immediately load data or transform it first

<img width="889" alt="image" src="https://user-images.githubusercontent.com/40857648/116013402-afa2e600-a638-11eb-9fea-310b4c0623cd.png">


