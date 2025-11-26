using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace LaplapApiService.Models
{
    public class Request
    {
        [Required]
        public string City { get; set; }
        [Required]
        public string Dog_Name { get; set; }
        [Required]
        public string Breed { get; set; }
        [Required]
        public string Age { get; set; }
        [Required]
        public string Weight { get; set; }
        [Required]
        public string Gender { get; set; }
        [Required]
        public List<string> What_Is_There { get; set; }
        [Required]
        public string Traumas { get; set; }
        [Required]
        public string Pulls_The_Leach { get; set; }
        [Required]
        public string Picks_Things_Up { get; set; }
        [Required]
        public string Gives_Back { get; set; }
        [Required]
        public string Fears { get; set; }
        [Required]
        public List<string> Aggression { get; set; }
        [Required]
        public string Contacts { get; set; }
        [Required]
        public string Care { get; set; }
        [Required]
        public string Care_Type { get; set; }
        [Required]
        public string Walk_Time { get; set; }
        [Required]
        public string How_To_Get_To_You { get; set; }
        [Required]
        public string Nuances { get; set; }
        [Required]
        public string Your_Name { get; set; }
        [Required]
        public string Nickname { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public string Time_Of_Call { get; set; }
        [Required]
        public string How_You_Found_Out { get; set; }
    }
}

