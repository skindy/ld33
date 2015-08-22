using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;


namespace FFF.WebService.Models
{
	public class PartSlot
	{
		#region Constants
		public static int Body = 1;
		public static int Head = 2;
		public static int LeftArm = 3;
		public static int RightArm = 4;
		public static int LeftLeg = 5;
		public static int RightLeg = 6;
		public static int Tail = 7;
		#endregion


		#region Fields
		private int id;
		private string name;
		#endregion


		#region Properties
		[Key]
		public int Id
		{
			get { return this.id; }
			set { this.id = value; }
		}


		[Index(IsUnique = true)]
		[StringLength(32)]
		[Required]
		public string Name
		{
			get { return this.name; }
			set { this.name = value; }
		}
		#endregion
	}
}