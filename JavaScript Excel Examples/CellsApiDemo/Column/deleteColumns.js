(function (){
    var appId = "your id";
    var appKey = "your key";
    var baseUrl = "https://api.e-iceblue.cn";

    var SpirecloudExcel = require('../../../src/index');
    var apiClient = new SpirecloudExcel.ApiClient(appId, appKey,baseUrl);
    var instance = new SpirecloudExcel.CellsApi(apiClient);

    var name= "test1.xlsx";
    var sheetName = "Sheet2";
    var columnIndex = 6;
    var columns = 2;
    var opts = { folder: "input",updateReference: true };
    instance.deleteColumns(name, sheetName, columnIndex, columns, opts, 
        function (error, data, response) {
            if (error) throw error;
        });
})();