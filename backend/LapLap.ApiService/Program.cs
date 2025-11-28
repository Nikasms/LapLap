using Microsoft.EntityFrameworkCore;
using Laplap.ApiService.Data;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();


builder.AddServiceDefaults();
builder.Services.AddProblemDetails();


builder.Services.AddDbContext<RequestContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));


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

app.MapDefaultEndpoints();

app.Run();