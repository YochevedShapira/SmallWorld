using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class ServiceTypeDto
    {
        public int ServiceTypeID { get; set; }

        public string Category { get; set; }

        public Nullable<int> SuggestionID { get; set; }

        public Nullable<int> RequestID { get; set; }

        public RequestDto Request { get; set; }

        public SuggestionDto Suggestion { get; set; }

    }
}
