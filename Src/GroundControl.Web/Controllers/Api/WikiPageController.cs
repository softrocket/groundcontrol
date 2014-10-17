using System.Web.Http;
using GroundControl.Services.Contracts;
using GroundControl.Shared.DTO;
using Softrocket.Infrastructure.Messaging;

namespace GroundControl.Web.Controllers.Api
{
    public class WikiPageController : ApiController
    {
        private readonly IPagePublicationsService publicationService;

        public WikiPageController(IPagePublicationsService publicationService)
        {
            this.publicationService = publicationService;
        }

        public PageDTO Get(int id)
        {
            GetResponse<PageDTO> response = this.publicationService.GetPublication(id);
            return response.Message;
        }

        public PageDTO Post(PageDTO page)
        {
            GetResponse<PageDTO> createdPage = this.publicationService.CreateNewPage(page);

            return createdPage.Message;

        }
    }
}
