using System.Linq;
using FFF.WebService.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;


namespace FFF.WebService.Tests.Models
{
	[TestClass]
	public class SoundboardServiceContextTests
	{

		[TestClass]
		public class DatabaseInitialization
		{
			[TestMethod]
			public void DropCreateNewDatabase()
			{
				using (FFFWebServiceContext context =
					new FFFWebServiceContext(
						FFFWebServiceContext.DBCreationMethod.DropCreateAlways))
				{
					Part humanHeadPart = context.Parts
						.FirstOrDefault(part => part.Name == "Human Head");
					Assert.IsNotNull(humanHeadPart);
				}
			}

		}

	}
}
