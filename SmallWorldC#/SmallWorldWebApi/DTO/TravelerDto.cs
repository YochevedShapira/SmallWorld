using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
  public  class TravelerDto
    {
        public int TravelerID { get; set; }

        public string TravelerName { get; set; }

        public System.DateTime BirthDate { get; set; }

        public string gender { get; set; }

        public string UserName { get; set; }
        public string TravelerPassword { get; set; }

        //   public UserDto UserDto { get; set; }

    }
}
