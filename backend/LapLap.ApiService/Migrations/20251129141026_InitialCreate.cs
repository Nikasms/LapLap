using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LapLap.ApiService.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Requests",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    SubmissionDate = table.Column<DateTime>(type: "TEXT", nullable: false),
                    City = table.Column<string>(type: "TEXT", nullable: false),
                    Dog_Name = table.Column<string>(type: "TEXT", nullable: false),
                    Breed = table.Column<string>(type: "TEXT", nullable: false),
                    Age = table.Column<string>(type: "TEXT", nullable: false),
                    Weight = table.Column<string>(type: "TEXT", nullable: false),
                    Gender = table.Column<string>(type: "TEXT", nullable: false),
                    What_Is_There = table.Column<string>(type: "TEXT", nullable: false),
                    Traumas = table.Column<string>(type: "TEXT", nullable: false),
                    Pulls_The_Leach = table.Column<string>(type: "TEXT", nullable: false),
                    Picks_Things_Up = table.Column<string>(type: "TEXT", nullable: false),
                    Gives_Back = table.Column<string>(type: "TEXT", nullable: false),
                    Fears = table.Column<string>(type: "TEXT", nullable: false),
                    Aggression = table.Column<string>(type: "TEXT", nullable: false),
                    Contacts = table.Column<string>(type: "TEXT", nullable: false),
                    Care = table.Column<string>(type: "TEXT", nullable: false),
                    Care_Type = table.Column<string>(type: "TEXT", nullable: false),
                    Walk_Time = table.Column<string>(type: "TEXT", nullable: false),
                    How_To_Get_To_You = table.Column<string>(type: "TEXT", nullable: false),
                    Nuances = table.Column<string>(type: "TEXT", nullable: false),
                    Your_Name = table.Column<string>(type: "TEXT", nullable: false),
                    Nickname = table.Column<string>(type: "TEXT", nullable: false),
                    Address = table.Column<string>(type: "TEXT", nullable: false),
                    Time_Of_Call = table.Column<string>(type: "TEXT", nullable: false),
                    How_You_Found_Out = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Requests", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Requests");
        }
    }
}
