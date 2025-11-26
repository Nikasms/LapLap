using Laplap.APIService.Models;
using Microsoft.EntityFrameworkCore;

namespace Laplap.ApiService.Data
{
    public class ApplicationContext : DbContext
    {

        public DbSet<Request> ServiceRequests { get; set; }

        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
        }
    }
}