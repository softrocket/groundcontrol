using AutoMapper;
using GroundControl.Entities.Implementations;
using GroundControl.Shared.DTO;

namespace GroundControl.Configuration
{
    public class AutoMapperProfile : Profile
    {
        protected override void Configure()
        {
            Mapper.CreateMap<WikiPage, PageDTO>()
                .ForMember(dst => dst.Author, o => o.MapFrom(src => src.Info.AuthorName))
                .ForMember(dst => dst.Date, o => o.MapFrom(src => src.Info.PublicationDate));
        }

        public override string ProfileName
        {
            get { return "GroundControl"; }
        } 
    }
}
