using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class ParameterTypeDto
    {
        public int ParameterTypeID { get; set; }

        public string ParameterName { get; set; }

        public Nullable<int> ParameterDataType { get; set; }

        public bool Optional { get; set; }

    }
}
