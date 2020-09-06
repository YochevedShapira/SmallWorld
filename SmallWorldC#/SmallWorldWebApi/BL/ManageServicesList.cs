using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
namespace BL
{
  public static  class ManageServicesList
    {

        public static List<ServiceTypeMapperDto> GetServicesList()
        {
           List< DAL.ServiceTypeList> servicesList = DAL.ManageServicesList.GetServicesList();
            List<ServiceTypeMapperDto> serviceTypeMapperDto = servicesList.ConvertAll(s =>
            { return new ServiceTypeMapperDto() { IdServiceType = s.ServiceTypeListID, ServiceTypeName = s.ServiceTypeName }; });

            return serviceTypeMapperDto;
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
