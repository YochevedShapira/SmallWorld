using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class StopDto
    {
        public int StopId { get; set; }

        public Nullable<int> StopLocation { get; set; }

        public Nullable<int> RequestId { get; set; }

        public Nullable<int> HostLocationId { get; set; }

        public Nullable<System.DateTime> StartDate { get; set; }

        public Nullable<System.DateTime> EndDate { get; set; }

        public Nullable<int> ServiceTypeId { get; set; }

        public AddressDto Address { get; set; }

        public LocationHostDto LocationHost { get; set; }

        public RequestDto Request { get; set; }

        public ServiceTypeDto ServiceType { get; set; }
    }
}
