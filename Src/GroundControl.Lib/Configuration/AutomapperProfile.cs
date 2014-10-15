using AutoMapper;
using GroundControl.Entities.Implementations;
using GroundControl.Shared.DTO;

namespace GroundControl.Configuration
{
    public class AutoMapperProfile : Profile
    {
        protected override void Configure()
        {
            Mapper.CreateMap<WikiPage, PageDTO>();
        }

        public override string ProfileName
        {
            get { return "GroundControl"; }
        } 
    }
}
