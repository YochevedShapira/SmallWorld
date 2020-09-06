using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class UserDto
    {
        public int UserID { get; set; }
        public string UserName { get; set; }
        public string UserPassword { get; set; }
        //public HostDto HostDto { get; set; }
        //public TravelerDto TravelerDto { get; set; }
        public Status UserStaus;
    }
}
