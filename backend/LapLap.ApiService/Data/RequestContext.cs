using Microsoft.EntityFrameworkCore.ChangeTracking;
using System.Text.Json;
using Laplap.ApiService.Models;
using Microsoft.EntityFrameworkCore;

namespace Laplap.ApiService.Data
{
    public class RequestContext : DbContext
    {

        public DbSet<Request> Requests { get; set; }

        public RequestContext(DbContextOptions<RequestContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Request>()
                .Property(r => r.What_Is_There)
                .HasConversion(
                    v => JsonSerializer.Serialize(v, (JsonSerializerOptions)null),
                    v => JsonSerializer.Deserialize<List<string>>(v, (JsonSerializerOptions)null),
                    new ValueComparer<List<string>>(
                        (c1, c2) => c1.SequenceEqual(c2),
                        c => c.Aggregate(0, (a, v) => HashCode.Combine(a, v.GetHashCode())),
                        c => c.ToList())
                );


            modelBuilder.Entity<Request>()
                .Property(r => r.Aggression)
                .HasConversion(
                    v => JsonSerializer.Serialize(v, (JsonSerializerOptions)null),
                    v => JsonSerializer.Deserialize<List<string>>(v, (JsonSerializerOptions)null),
                    new ValueComparer<List<string>>(
                        (c1, c2) => c1.SequenceEqual(c2),
                        c => c.Aggregate(0, (a, v) => HashCode.Combine(a, v.GetHashCode())),
                        c => c.ToList())
                );
        }
    }
}