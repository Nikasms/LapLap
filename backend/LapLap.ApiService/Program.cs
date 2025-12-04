using Microsoft.EntityFrameworkCore;
using Laplap.ApiService.Data;
using System.Net;

var builder = WebApplication.CreateBuilder(args);


builder.WebHost.ConfigureKestrel(serverOptions =>
{
    serverOptions.ListenLocalhost(5500); 
});

builder.Services.AddControllers();
//builder.AddServiceDefaults();
builder.Services.AddProblemDetails();

var dbPath = System.IO.Path.Join(builder.Environment.ContentRootPath, "requests.db");


builder.Services.AddDbContext<RequestContext>(options =>
    options.UseSqlite($"Data Source={dbPath}"));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

app.UseExceptionHandler();
app.UseCors("AllowAll");
app.MapControllers();
//app.MapDefaultEndpoints();

app.Run();