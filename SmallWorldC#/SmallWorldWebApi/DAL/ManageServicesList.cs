using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
   public static class ManageServicesList
    {
        public static List<ServiceTypeList> GetServicesList()
        {
            try
            {
                using (YMprojectEntities1 entities = new YMprojectEntities1())
                {
                   return entities.ServiceTypeLists.ToList();


                }
               
            }
            catch (Exception ex)
            {
                return null;
            }
        }

    }
}
