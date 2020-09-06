using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
namespace BL
{
  public static  class ManageHost
    {

        public static HostDto GetHost(int id)
        {
            return Host.ToDTO(DAL.ManageHost.GetHost(id));
        }




        public static HostDto SaveHost(HostDto hostDto)
        {

            return Host.ToDTO( DAL.ManageHost.SaveHost(Host.ToUserDAL(hostDto)));
        }

        public static bool DeleteHost(UserDto hostDto)
        {
            return DAL.ManageHost.DeleteHost(User.ToDAL(hostDto));
        }

        public static HostDto UpdateHost(HostDto hostDto)
        {
            return Host.ToDTO( DAL.ManageHost.UpdateHost(Host.ToDAL(hostDto)));
        }





    }
}
