<script>
(function () {
    var myConnector = tableau.makeConnector();

    myConnector.getSchema = function (schemaCallback) {
		var colsCompareScoring = [{
			id: 'Id',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'VoucherActivationDate',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'ClientFirstName',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'ClientMiddleName',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'ClientLastName',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'ClientGender',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'DrivingExperience',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'TotalSummaryDistance',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'AbsoluteScore',
			dataType: tableau.dataTypeEnum.float
			}, {
			id: 'EcoIndex',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'FuelConsumptionVolume',
			dataType: tableau.dataTypeEnum.float
			}, {
			id: 'MetresTravelled',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'MetresTravelledOnMotorways',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'MetresTravelledInUrbanAreas',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'MetresTravelledOnOtherTypesOfRoad',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'MetresTravelledOnUnknownTypesOfRoad',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'MetresTravelledInTheDay',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'MetresTravelledInTheNight',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'AccelerationScore',
			dataType: tableau.dataTypeEnum.float
			}, {
			id: 'BrakingScore',
			dataType: tableau.dataTypeEnum.float
			}, {
			id: 'DirectionChangeScore',
			dataType: tableau.dataTypeEnum.float
			}, {
			id: 'CorneringScore',
			dataType: tableau.dataTypeEnum.float
			}, {
			id: 'Crashes',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'VehicleRegNumber',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'AllScore',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'ThreeMonths',
			dataType: tableau.dataTypeEnum.bool
			}, {
			id: 'VehicleModelId',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'VehicleModelTitle',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'VehicleBrand',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'VehicleDriverCategoryId',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'VehicleDriverCategoryTitle',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'refresh_date',
			dataType: tableau.dataTypeEnum.int
		}];

		var tableSchemaCompareScoring = {
			id: "compareScoring",
			alias: "Compare Scoring",
			columns: colsCompareScoring
	    };

	    var colsCrashList = [{
			id: 'CrashUniqueIdentifier',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'CrashDateTime',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'MaximumAcceleration',
			dataType: tableau.dataTypeEnum.float
			}, {
			id: 'ZipCode',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'City',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'Street',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'ClientFirstName',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'ClientMiddleName',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'ClientLastName',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'ClientPhone',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'VoucherNumber',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'VehicleRegNumber',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'ID',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'Ident',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'StatusOfRoadAccident',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'StatusOfRoadAccidentID',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'DateTimeOfNextCall',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'LockedBy',
			dataType: tableau.dataTypeEnum.float
			}, {
			id: 'Longitude',
			dataType: tableau.dataTypeEnum.float
			}, {
			id: 'Latitude',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'ClientName',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'Vip',
			dataType: tableau.dataTypeEnum.bool
			}, {
			id: 'refresh_date',
			dataType: tableau.dataTypeEnum.int
		}];

		var tableSchemaCrashListClosed = {
			id: "crashListClosed",
			alias: "Crash List (closed)",
			columns: colsCrashList
	    };

	    var tableSchemaCrashListOpened = {
			id: "crashListOpened",
			alias: "Crash List (opened)",
			columns: colsCrashList
	    };

	    var colsVouchers = [{
			id: 'Id',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'VoucherNumber',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'GroupId',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'VoucherActivationDate',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'VoucherCreationDate',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'VoucherClosureDate',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'ContractNumber',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'CompanyName',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'ContractSignatureDate',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'ContractBeginDate',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'ContractEndDate',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'Branch',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'ContractStatus',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'PolicyNumber',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'Agent',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'ClientName',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'PhoneNumber',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'SecondaryPhoneNumber',
			dataType: tableau.dataTypeEnum.string
			}, {
			// id: 'СontactAdditionalPhone',
			// dataType: tableau.dataTypeEnum.string
			// }, {
			id: 'Country',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'City',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'BirthdayDate',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'FirstDrivingLicenseDate',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'ZIPCode',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'VehicleRegNumber',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'VehicleRegistrationDate',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'VIN',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'IMEI',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'VehicleModel',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'VehicleYear',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'VehicleColor',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'VehicleBrand',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'DeviceSimNumber',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'ObuBrand',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'ObuModel',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'DrivingExperience',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'Crashes',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'ObuAlien',
			dataType: tableau.dataTypeEnum.bool
			}, {
			id: 'VoucherStatusCycle',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'TerminalAffiliation',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'Vip',
			dataType: tableau.dataTypeEnum.bool
			}, {
			id: 'ContractTypeId',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'refresh_date',
			dataType: tableau.dataTypeEnum.int
		}];

		var tableSchemaVouchers = {
			id: "vouchers",
			alias: "Vouchers",
			columns: colsVouchers
	    };

	    schemaCallback([tableSchemaCompareScoring, tableSchemaCrashListClosed, tableSchemaCrashListOpened, tableSchemaVouchers]);

    };

    myConnector.getData = function(table, doneCallback) {
    	var tmpdata = JSON.parse(tableau.connectionData);
    	if (table.tableInfo.id == 'compareScoring') {
    		$.ajax(tmpdata.domain + '/api/comparescoring?page=1&pageSize=99999999', {
	    		success: function(resp) {
			    	var feat = resp.Items,
			        	tableData = [];
					for (var i = 0, len = feat.length; i < len; i++) {
					    tableData.push({
					        "Id": feat[i].Id,
					        "VoucherActivationDate": feat[i].VoucherActivationDate,
					        "ClientFirstName": feat[i].ClientFirstName,
					        "ClientMiddleName": feat[i].ClientMiddleName,
					        "ClientLastName": feat[i].ClientLastName,
					        "ClientGender": feat[i].ClientGender,
							"DrivingExperience": feat[i].DrivingExperience,
					        "TotalSummaryDistance": feat[i].TotalSummaryDistance,
					        "AbsoluteScore": feat[i].AbsoluteScore,
					        "EcoIndex": feat[i].EcoIndex,
					        "FuelConsumptionVolume": feat[i].FuelConsumptionVolume,
					        "MetresTravelled": feat[i].MetresTravelled,
					        "MetresTravelledOnMotorways": feat[i].MetresTravelledOnMotorways,
					        "MetresTravelledInUrbanAreas": feat[i].MetresTravelledInUrbanAreas,
					        "MetresTravelledOnOtherTypesOfRoad": feat[i].MetresTravelledOnOtherTypesOfRoad,
					        "MetresTravelledOnUnknownTypesOfRoad": feat[i].MetresTravelledOnUnknownTypesOfRoad,
					        "MetresTravelledInTheDay": feat[i].MetresTravelledInTheDay,
					        "MetresTravelledInTheNight": feat[i].MetresTravelledInTheNight,
					        "AccelerationScore": feat[i].AccelerationScore,
					        "BrakingScore": feat[i].BrakingScore,
					        "DirectionChangeScore": feat[i].DirectionChangeScore,
					        "CorneringScore": feat[i].CorneringScore,
					        "Crashes": feat[i].Crashes,
					        "VehicleRegNumber": feat[i].VehicleRegNumber,
					        "AllScore": feat[i].AllScore,
					        "ThreeMonths": feat[i].ThreeMonths,
					        "VehicleModelId": feat[i].VehicleModel.Id,
					        "VehicleModelTitle": feat[i].VehicleModel.Title,
					        "VehicleBrand": feat[i].VehicleBrand,
					        "VehicleDriverCategoryId": feat[i].VehicleDriverCategory.Id,
					        "VehicleDriverCategoryTitle": feat[i].VehicleDriverCategory.Title,
					        "refresh_date": Date.now(),
					    });
					}
					table.appendRows(tableData);
					doneCallback();
				},
				headers: {
					"Accept": "application/json",
					"Authorization":"Bearer " + tableau.password
				}
			});
    	}
   		
   		if (table.tableInfo.id == 'crashListClosed') {
   			$.ajax(tmpdata.domain + '/api/crashlist/closed?page=1&pageSize=999999&sort=CrashDateTime-desc', {
	    		success: function(resp) {
			    	var feat = resp.Items,
			        	tableData = [];

					for (var i = 0, len = feat.length; i < len; i++) {
					    tableData.push({
					        "CrashUniqueIdentifier": feat[i].CrashUniqueIdentifier,
					        "CrashDateTime": feat[i].CrashDateTime,
					        "MaximumAcceleration": feat[i].MaximumAcceleration,
					        "ZipCode": feat[i].ZipCode,
					        "City": feat[i].City,
					        "Street": feat[i].Street,
							"ClientFirstName": feat[i].ClientFirstName,
					        "ClientMiddleName": feat[i].ClientMiddleName,
					        "ClientLastName": feat[i].ClientLastName,
					        "ClientPhone": feat[i].ClientPhone,
					        "VoucherNumber": feat[i].VoucherNumber,
					        "VehicleRegNumber": feat[i].VehicleRegNumber,
					        "ID": feat[i].ID,
					        "Ident": feat[i].Ident,
					        "StatusOfRoadAccident": feat[i].StatusOfRoadAccident,
					        "StatusOfRoadAccidentID": feat[i].StatusOfRoadAccidentID,
					        "DateTimeOfNextCall": feat[i].DateTimeOfNextCall,
					        "LockedBy": feat[i].LockedBy,
					        "Longitude": feat[i].Longitude,
					        "Latitude": feat[i].Latitude,
					        "ClientName": feat[i].ClientName,
					        "Vip": feat[i].Vip,
					        "refresh_date": Date.now(),
					    });
					}
					table.appendRows(tableData);
					doneCallback();
				},
				headers: {
					"Accept": "application/json",
					"Authorization":"Bearer " + tableau.password
				}
			});
   		}

   		if (table.tableInfo.id == 'crashListOpened') {
   			$.ajax(tmpdata.domain + '/api/crashlist/opened?page=1&pageSize=999999&sort=CrashDateTime-desc', {
	    		success: function(resp) {
			    	var feat = resp.Items,
			        	tableData = [];

					for (var i = 0, len = feat.length; i < len; i++) {
					    tableData.push({
					        "CrashUniqueIdentifier": feat[i].CrashUniqueIdentifier,
					        "CrashDateTime": feat[i].CrashDateTime,
					        "MaximumAcceleration": feat[i].MaximumAcceleration,
					        "ZipCode": feat[i].ZipCode,
					        "City": feat[i].City,
					        "Street": feat[i].Street,
							"ClientFirstName": feat[i].ClientFirstName,
					        "ClientMiddleName": feat[i].ClientMiddleName,
					        "ClientLastName": feat[i].ClientLastName,
					        "ClientPhone": feat[i].ClientPhone,
					        "VoucherNumber": feat[i].VoucherNumber,
					        "VehicleRegNumber": feat[i].VehicleRegNumber,
					        "ID": feat[i].ID,
					        "Ident": feat[i].Ident,
					        "StatusOfRoadAccident": feat[i].StatusOfRoadAccident,
					        "StatusOfRoadAccidentID": feat[i].StatusOfRoadAccidentID,
					        "DateTimeOfNextCall": feat[i].DateTimeOfNextCall,
					        "LockedBy": feat[i].LockedBy,
					        "Longitude": feat[i].Longitude,
					        "Latitude": feat[i].Latitude,
					        "ClientName": feat[i].ClientName,
					        "Vip": feat[i].Vip,
					        "refresh_date": Date.now(),
					    });
					}
					table.appendRows(tableData);
					doneCallback();
				},
				headers: {
					"Accept": "application/json",
					"Authorization":"Bearer " + tableau.password
				}
			});
   		}

   		if (table.tableInfo.id == 'vouchers') {
    		$.ajax(tmpdata.domain + '/api/vouchers?page=1&pageSize=999999', {
	    		success: function(resp) {
			    	var feat = resp.Items,
			        	tableData = [];

					for (var i = 0, len = feat.length; i < len; i++) {
					    tableData.push({
					        "Id": feat[i].Id,
					        "VoucherNumber": feat[i].VoucherNumber,
					        "GroupId": feat[i].GroupId,
					        "VoucherActivationDate": feat[i].VoucherActivationDate,
					        "VoucherCreationDate": feat[i].VoucherCreationDate,
					        "VoucherClosureDate": feat[i].VoucherClosureDate,
							"ContractNumber": feat[i].ContractNumber,
					        "CompanyName": feat[i].CompanyName,
					        "ContractSignatureDate": feat[i].ContractSignatureDate,
					        "ContractBeginDate": feat[i].ContractBeginDate,
					        "ContractEndDate": feat[i].ContractEndDate,
					        "Branch": feat[i].Branch,
					        "ContractStatus": feat[i].ContractStatus,
					        "PolicyNumber": feat[i].PolicyNumber,
					        "Agent": feat[i].Agent,
					        "ClientName": feat[i].ClientName,
					        "PhoneNumber": feat[i].PhoneNumber,
					        "SecondaryPhoneNumber": feat[i].SecondaryPhoneNumber,
					        // "СontactAdditionalPhone": feat[i].СontactAdditionalPhone,
					        "Country": feat[i].Country,
					        "City": feat[i].City,
					        "BirthdayDate": feat[i].BirthdayDate,
					        "FirstDrivingLicenseDate": feat[i].FirstDrivingLicenseDate,
					        "ZIPCode": feat[i].ZIPCode,
					        "VehicleRegNumber": feat[i].VehicleRegNumber,
					        "VehicleRegistrationDate": feat[i].VehicleRegistrationDate,
					        "VIN": feat[i].VIN,
					        "IMEI": feat[i].IMEI,
					        "VehicleModel": feat[i].VehicleModel,
					        "VehicleYear": feat[i].VehicleYear,
					        "VehicleColor": feat[i].VehicleColor,
					        "VehicleBrand": feat[i].VehicleBrand,
					        "DeviceSimNumber": feat[i].DeviceSimNumber,
					        "ObuBrand": feat[i].ObuBrand,
					        "ObuModel": feat[i].ObuModel,
					        "DrivingExperience": feat[i].DrivingExperience,
					        "Crashes": feat[i].Crashes,
					        "ObuAlien": feat[i].ObuAlien,
					        "VoucherStatusCycle": feat[i].VoucherStatusCycle,
					        "TerminalAffiliation": feat[i].TerminalAffiliation,
					        "Vip": feat[i].Vip,
					        "ContractTypeId": feat[i].ContractTypeId,
					        "refresh_date": Date.now(),
					    });
					}
					table.appendRows(tableData);
					doneCallback();
				},
				headers: {
					"Accept": "application/json",
					"Authorization":"Bearer " + tableau.password
				}
			});
    	}
	};

    tableau.registerConnector(myConnector);

$(document).ready(function () {
    $("#submitButton").click(function () {
    	tableau.connectionName = "Telematics API Data";
        tableau.password = $("#input_token").val();
        tableau.connectionData = JSON.stringify({domain: $("#input_domain").val()})
        tableau.submit();
    });
});

})();
</script>
