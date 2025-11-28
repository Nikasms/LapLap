using Microsoft.AspNetCore.Mvc;
using Laplap.ApiService.Data;
using Laplap.ApiService.Models;

namespace LapLap.ApiService.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class RequestsController : ControllerBase
	{
		private readonly RequestContext _context;

		public RequestsController(RequestContext context)
		{
			_context = context;
		}

		[HttpPost]
		public async Task<IActionResult> CreateRequest(Request request)
		{
			if (!ModelState.IsValid)
				return BadRequest(ModelState);

			request.SubmissionDate = DateTime.UtcNow;

			// ТУТ БУЛА ПОМИЛКА: Тепер ми звертаємось до Requests
			_context.Requests.Add(request);
			await _context.SaveChangesAsync();

			return Ok(request);
		}
	}
}