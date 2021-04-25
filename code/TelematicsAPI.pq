section TelematicsAPI;

TelematicsAPI = [
    Authentication = [
        Key = []
    ],
    Label = "TelematicsAPI"
];

TelematicsAPI.Publish = [
    Beta = true,
    Category = "Online Services",
    ButtonText = { "TelematicsAPI", "TelematicsAPI" }
];

[DataSource.Kind="TelematicsAPI"]
shared TelematicsAPI.Feed = Value.ReplaceType(TelematicsAPI_Impl, type function (url as Uri.Type) as any);

[DataSource.Kind="TelematicsAPI", Publish="TelematicsAPI.Publish"]
shared TelematicsAPI.Contents =  Value.ReplaceType(TelematicsAPINavTable, type function (url as Uri.Type) as any);

TelematicsAPI_Impl = (url as text) =>
    let
        apiKey = Extension.CurrentCredential()[Key],
        headers = [
            #"Authorization" = "Bearer " & apiKey,
            #"Content-Type" = "application/json"
        ],
        source = Web.Contents(url, [ Headers = headers]),
        result = Json.Document(source)
    in
        result;

TelematicsAPINavTable = (url as text) as table =>
    let
        source = #table({"Name", "Data", "ItemKind", "ItemName", "IsLeaf"}, {
            { "CompareScoring", GetCompareScoring(url), "Table", "Table", true },
            { "Vouchers", GetVouchers(url), "Table", "Table", true },
            { "OpendCrashList", GetOpenedCrashList(url), "Table", "Table", true },
            { "ClosedCrashList", GetClosedCrashList(url), "Table", "Table", true }
        }),
        navTable = Table.ToNavigationTable(source, {"Name"}, "Name", "Data", "ItemKind", "ItemName", "IsLeaf")
    in
        navTable;

GetCompareScoring = (url as text) as table =>
    let
        source = TelematicsAPI.Feed(url & "/api/comparescoring?page=1&pageSize=99999999"),
        items = source[Items],
        toTable = Table.FromList(items, Splitter.SplitByNothing(), null, null, ExtraValues.Error),
        #"Expanded element Column1" = Table.ExpandRecordColumn(toTable, "Column1", {"Id", "VoucherActivationDate", "ClientFirstName", "ClientMiddleName", "ClientLastName", "ClientGender", "DrivingExperience", "TotalSummaryDistance", "AbsoluteScore", "EcoIndex", "FuelConsumptionVolume", "MetresTravelled", "MetresTravelledOnMotorways", "MetresTravelledInUrbanAreas", "MetresTravelledOnOtherTypesOfRoad", "MetresTravelledOnUnknownTypesOfRoad", "MetresTravelledInTheDay", "MetresTravelledInTheNight", "AccelerationScore", "BrakingScore", "DirectionChangeScore", "CorneringScore", "Crashes", "VehicleRegNumber", "AllScore", "ThreeMonths", "VehicleModel", "VehicleBrand", "VehicleDriverCategory"}, {"Id", "VoucherActivationDate", "ClientFirstName", "ClientMiddleName", "ClientLastName", "ClientGender", "DrivingExperience", "TotalSummaryDistance", "AbsoluteScore", "EcoIndex", "FuelConsumptionVolume", "MetresTravelled", "MetresTravelledOnMotorways", "MetresTravelledInUrbanAreas", "MetresTravelledOnOtherTypesOfRoad", "MetresTravelledOnUnknownTypesOfRoad", "MetresTravelledInTheDay", "MetresTravelledInTheNight", "AccelerationScore", "BrakingScore", "DirectionChangeScore", "CorneringScore", "Crashes", "VehicleRegNumber", "AllScore", "ThreeMonths", "VehicleModel", "VehicleBrand", "VehicleDriverCategory"}),
        #"Expanded element Column1.VehicleModel" = Table.ExpandRecordColumn(#"Expanded element Column1", "VehicleModel", {"Id", "Title"}, {"VehicleModel.Id", "VehicleModel.Title"}),
        result = Table.ExpandRecordColumn(#"Expanded element Column1.VehicleModel", "VehicleDriverCategory", {"Id", "Title"}, {"VehicleDriverCategory.Id", "VehicleDriverCategory.Title"})
    in
        result;

GetOpenedCrashList = (url as text) as table =>
    let
        source = TelematicsAPI.Feed(url & "/api/crashlist/opened?page=1&pageSize=99999999&sort=CrashDateTime-desc"),
        items = source[Items],
        toTable = Table.FromList(items, Splitter.SplitByNothing(), null, null, ExtraValues.Error),
        result = Table.ExpandRecordColumn(toTable, "Column1", {"CrashUniqueIdentifier", "CrashDateTime", "MaximumAcceleration", "ZipCode", "City", "Street", "ClientFirstName", "ClientMiddleName", "ClientLastName", "ClientPhone", "VoucherNumber", "VehicleRegNumber", "ID", "Ident", "StatusOfRoadAccident", "StatusOfRoadAccidentID", "DateTimeOfNextCall", "LockedBy", "Longitude", "Latitude", "ClientName", "Vip"}, {"CrashUniqueIdentifier", "CrashDateTime", "MaximumAcceleration", "ZipCode", "City", "Street", "ClientFirstName", "ClientMiddleName", "ClientLastName", "ClientPhone", "VoucherNumber", "VehicleRegNumber", "ID", "Ident", "StatusOfRoadAccident", "StatusOfRoadAccidentID", "DateTimeOfNextCall", "LockedBy", "Longitude", "Latitude", "ClientName", "Vip"})
    in
        result;

GetClosedCrashList = (url as text) as table =>
    let
        source = TelematicsAPI.Feed(url & "/api/crashlist/closed?page=1&pageSize=99999999&sort=CrashDateTime-desc"),
        items = source[Items],
        toTable = Table.FromList(items, Splitter.SplitByNothing(), null, null, ExtraValues.Error),
        result = Table.ExpandRecordColumn(toTable, "Column1", {"CrashUniqueIdentifier", "CrashDateTime", "MaximumAcceleration", "ZipCode", "City", "Street", "ClientFirstName", "ClientMiddleName", "ClientLastName", "ClientPhone", "VoucherNumber", "VehicleRegNumber", "ID", "Ident", "StatusOfRoadAccident", "StatusOfRoadAccidentID", "DateTimeOfNextCall", "LockedBy", "Longitude", "Latitude", "ClientName", "Vip"}, {"CrashUniqueIdentifier", "CrashDateTime", "MaximumAcceleration", "ZipCode", "City", "Street", "ClientFirstName", "ClientMiddleName", "ClientLastName", "ClientPhone", "VoucherNumber", "VehicleRegNumber", "ID", "Ident", "StatusOfRoadAccident", "StatusOfRoadAccidentID", "DateTimeOfNextCall", "LockedBy", "Longitude", "Latitude", "ClientName", "Vip"})
    in
        result;

GetScoringReview = (url as text, voucherId as text) as list =>
    let
        source = TelematicsAPI.Feed(url & "/api/scoringreview?End=3021-04-25T20%3A59%3A59.999&Start=1970-01-01T00%3A00%3A00.000&VoucherId=" & voucherId),
        result = source[Items]
    in
        result;

GetVouchers = (url as text) as table =>
    let
        source = TelematicsAPI.Feed(url & "/api/vouchers?page=1&pageSize=99999999"),
        items = source[Items],
        toTable = Table.FromList(items, Splitter.SplitByNothing(), null, null, ExtraValues.Error),
        #"Expanded element Column1" = Table.ExpandRecordColumn(toTable, "Column1", {"Id", "VoucherNumber", "GroupId", "VoucherActivationDate", "VoucherCreationDate", "VoucherClosureDate", "ContractNumber", "CompanyName", "ContractSignatureDate", "ContractBeginDate", "ContractEndDate", "Branch", "ContractStatus", "PolicyNumber", "Agent", "ClientName", "PhoneNumber", "SecondaryPhoneNumber", "СontactAdditionalPhone", "Country", "City", "BirthdayDate", "FirstDrivingLicenseDate", "ZIPCode", "VehicleRegNumber", "VehicleRegistrationDate", "VIN", "IMEI", "VehicleModel", "VehicleYear", "VehicleColor", "VehicleBrand", "DeviceSimNumber", "ObuBrand", "ObuModel", "DrivingExperience", "Crashes", "ObuAlien", "VoucherStatusCycle", "TerminalAffiliation", "Vip", "ContractTypeId"}, {"Id", "VoucherNumber", "GroupId", "VoucherActivationDate", "VoucherCreationDate", "VoucherClosureDate", "ContractNumber", "CompanyName", "ContractSignatureDate", "ContractBeginDate", "ContractEndDate", "Branch", "ContractStatus", "PolicyNumber", "Agent", "ClientName", "PhoneNumber", "SecondaryPhoneNumber", "СontactAdditionalPhone", "Country", "City", "BirthdayDate", "FirstDrivingLicenseDate", "ZIPCode", "VehicleRegNumber", "VehicleRegistrationDate", "VIN", "IMEI", "VehicleModel", "VehicleYear", "VehicleColor", "VehicleBrand", "DeviceSimNumber", "ObuBrand", "ObuModel", "DrivingExperience", "Crashes", "ObuAlien", "VoucherStatusCycle", "TerminalAffiliation", "Vip", "ContractTypeId"}),
        result = Table.AddColumn(#"Expanded element Column1", "ScoringReviewList", each GetScoringReview(url, Number.ToText([Id]))) 
    in
        result;

Table.ToNavigationTable = (
    table as table,
    keyColumns as list,
    nameColumn as text,
    dataColumn as text,
    itemKindColumn as text,
    itemNameColumn as text,
    isLeafColumn as text
) as table =>
    let
        tableType = Value.Type(table),
        newTableType = Type.AddTableKey(tableType, keyColumns, true) meta 
        [
            NavigationTable.NameColumn = nameColumn, 
            NavigationTable.DataColumn = dataColumn,
            NavigationTable.ItemKindColumn = itemKindColumn, 
            Preview.DelayColumn = itemNameColumn, 
            NavigationTable.IsLeafColumn = isLeafColumn
        ],
        navigationTable = Value.ReplaceType(table, newTableType)
    in
        navigationTable;
