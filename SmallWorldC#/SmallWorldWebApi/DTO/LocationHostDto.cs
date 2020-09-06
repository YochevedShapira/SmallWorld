using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class LocationHostDto
    {
        public int LocationHostID { get; set; }

        public Nullable<int> HostID { get; set; }

        public Nullable<int> AddressId { get; set; }

        public AddressDto Address { get; set; }

        public HostDto Host { get; set; }

    }
}
