using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;

namespace BL
{
    
   public static class ManageUser
    {
        public static HostDto GetUser(int id)
        {
            return Host.ToDTO(DAL.ManageHost.GetHost(id));
        }
        public static bool IsExists(string userName)
        {
          return  DAL.ManageUser.IsExist(userName);
        }



        public static HostDto SaveHost(HostDto hostDto)
        {

            return Host.ToDTO(DAL.ManageHost.SaveHost(Host.ToUserDAL(hostDto)));
        }

        public static bool DeleteHost(UserDto hostDto)
        {
            return DAL.ManageHost.DeleteHost(User.ToDAL(hostDto));
        }

        public static HostDto UpdateHost(HostDto hostDto)
        {
            return Host.ToDTO(DAL.ManageHost.UpdateHost(Host.ToDAL(hostDto)));
        }

        public static UserDto  Login(UserDto u)
        {
            UserDto uu= User.ToDTO(DAL.ManageUser.Login(User.ToDAL(u)));
            if (DAL.ManageHost.GetHost(uu.UserID) != null)
                uu.UserStaus = Status.Host;
            else uu.UserStaus = Status.Traveler;
            return uu;
        }
    }
}
