using Microsoft.AspNetCore.Mvc;
using Laplap.ApiService.Data;
using Laplap.ApiService.Models;

namespace Laplap.ApiService.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class RequestsController : ControllerBase
	{
		private readonly ApplicationContext _context;

		public RequestsController(ApplicationContext context)
		{
			_context = context;
		}

		[HttpPost]
		public async Task<IActionResult> CreateRequest(ServiceRequest request)
		{
			if (!ModelState.IsValid)
				return BadRequest(ModelState);

			request.SubmissionDate = DateTime.UtcNow;

			_context.ServiceRequests.Add(request);
			await _context.SaveChangesAsync();

			return Ok(request); 
		}
	}
}