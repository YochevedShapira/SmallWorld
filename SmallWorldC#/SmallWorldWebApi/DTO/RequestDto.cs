using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class RequestDto
    {
        public int RequestID { get; set; }

        

        public int TravelerID { get; set; }

        public TravelerDto Traveler { get; set; }

        public int Age { get; set; }

        public HoursRange HoursRange { get; set; }

        public AgeRange AgeRange { get; set; }

        public List<int> ServicesTypes { get; set; }

        public string Country { get; set; }

        public string Gender { get; set; }

        public string City { get; set; }

        public string Street { get; set; }

        public DateTime DateStart { get; set; }

        public DateTime DateEnd { get; set; }
    }
}
