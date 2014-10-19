using System;

namespace GroundControl.Shared.DTO
{
    public class PageDTO
    {
        public int Id { get; set; }
        
        public string Title { get; set; }

        public DateTime? Date { get; set; }

        public string Author { get; set; }

        public int PageTypeId { get; set; }
    }
}
