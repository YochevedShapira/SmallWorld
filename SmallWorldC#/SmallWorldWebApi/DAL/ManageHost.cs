using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
  public static class ManageHost
    {
        public static Host GetHost(int id)
        {
            try
            {
                using (YMprojectEntities1 entities = new YMprojectEntities1())
                {
                    Host host = entities.Hosts.First(p => p.HostID == id);
                    return host;
                }
            }
            catch(Exception ex) { return null; }
        }

        public static Host SaveHost(User userhost)
        {
            try
            {
                int x;
                using (YMprojectEntities1 entities = new YMprojectEntities1())
                {

                    
                    entities.Users.Add(userhost);
                    entities.SaveChanges();
                  x=  userhost.UserId;
                    return userhost.Host;
                }
               
            }
            catch(Exception ex)
            {

                return null;
            }
        }

        public static bool DeleteHost(User userHost)
        {
            try
            {
                using (YMprojectEntities1 entities = new YMprojectEntities1())
                {
                    entities.Users.Remove(userHost);
                    entities.SaveChanges();
                }
                return true;
            }
            catch (Exception ex)
            {

                return false;
            }
        }

        public static Host UpdateHost(Host userHost)
        {
            try
            {
                using (YMprojectEntities1 entities = new YMprojectEntities1())
                {
                   Host hh= entities.Hosts.First(h => h == userHost);
                    if(hh!=null)
                    hh = userHost;
                    entities.SaveChanges();
                    return hh;
                }
               
            }
            catch { return null; }
        } 
    }
}
