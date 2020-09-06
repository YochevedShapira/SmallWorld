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

        public Nullable<System.DateTime> StartDate { get; set; }

        public Nullable<System.DateTime> EndDate { get; set; }

        public int TravelerID { get; set; }

        public TravelerDto Traveler { get; set; }

    }
}
