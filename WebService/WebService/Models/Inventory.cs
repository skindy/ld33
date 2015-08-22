using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;


namespace FFF.WebService.Models
{
	public class Inventory
	{
		#region Fields
		private int id;
		private int monsterId;
		private int partId;
		private bool equipped;
		private Monster monster;
		private Part part;
		#endregion


		#region Properties
		[Column(Order = 4)] 
		public bool Equipped
		{
			get { return this.equipped; }
			set { this.equipped = value; }
		}


		[Key]
		[Column(Order = 1)]
		public int Id
		{
			get { return this.id; }
			set { this.id = value; }
		}


		[ForeignKey("MonsterId")]
		public Monster Monster
		{
			get { return this.monster; }
			set { this.monster = value; }
		}


		[Column(Order = 2)]
		public int MonsterId
		{
			get { return this.monsterId; }
			set { this.monsterId = value; }
		}

		
		[ForeignKey("PartId")]
		public Part Part
		{
			get { return this.part; }
			set { this.part = value; }
		}


		[Required]
		[Column(Order = 3)]
		public int PartId
		{
			get { return this.partId; }
			set { this.partId = value; }
		}
		#endregion
	}
}