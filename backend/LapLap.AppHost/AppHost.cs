var builder = DistributedApplication.CreateBuilder(args);


var apiService = builder.AddProject<Projects.LapLap_ApiService>("apiservice");


builder.Build().Run();