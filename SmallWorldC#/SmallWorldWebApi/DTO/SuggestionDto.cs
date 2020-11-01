using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class HoursRange
    {
        public int StartHour { get; set; }
        public int MaxHour { get; set; }
    }
    public class AgeRange
    {
        public int MinAge { get; set; }
        public int MaxAge { get; set; }
    }
    public class SuggestionDto
    {

       
        

        public int SuggestionID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public AgeRange RangeAge { get; set; }
        public HoursRange RangeHours { get; set; }
        public string Gender { get; set; }
        private List<int> servicesType;
        public List<string> ServicesTypeName { get; set; }

        public List<int> ServicesType
        {
            get { return servicesType; }
            set
            {
                if (value.Count() > 0)
                    servicesType = value;
            }
        }
        public string Country { get; set; }
        public string City { get; set; }
        public string Street { get; set; }
        public int HostId { get; set; }
        public List<bookedDateDto> bookedDates { get; set; }
    }
}
