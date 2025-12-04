using Microsoft.EntityFrameworkCore;
using Laplap.ApiService.Models; 

namespace Laplap.ApiService.Data
{
    public class RequestContext : DbContext
    {
        public RequestContext(DbContextOptions<RequestContext> options)
            : base(options)
        {
        }

        public DbSet<Request> Requests { get; set; }

       
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Request>()
                .Property(e => e.What_Is_There)
                .HasConversion(
                    v => string.Join(',', v),
                    v => v.Split(',', StringSplitOptions.RemoveEmptyEntries).ToList()); // З бази: "a,b,c" -> List


            modelBuilder.Entity<Request>()
                .Property(e => e.Aggression)
                .HasConversion(
                    v => string.Join(',', v),
                    v => v.Split(',', StringSplitOptions.RemoveEmptyEntries).ToList());
        }
    }
}