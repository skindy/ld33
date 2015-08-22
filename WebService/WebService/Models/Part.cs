using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;


namespace FFF.WebService.Models
{
	public class Part
	{
		#region Fields
		private int id;
		private string name;
		private string species;
		private int slotId;
		private int lust;
		private int speed;
		private int strength;
		private PartSlot slot;
		#endregion


		#region Properties
		[Key]
		[Column(Order = 1)]
		public int Id
		{
			get { return this.id; }
			set { this.id = value; }
		}


		[Column(Order = 7)]
		public int Lust
		{
			get { return this.lust; }
			set { this.lust = value; }
		}


		[Index(IsUnique = true)]
		[StringLength(128)]
		[Required]
		[Column(Order = 2)]
		public string Name
		{
			get { return this.name; }
			set { this.name = value; }
		}


		[ForeignKey("SlotId")]
		public PartSlot Slot
		{
			get { return this.slot; }
			set { this.slot = value; }
		}


		[Column(Order = 4)]
		public int SlotId
		{
			get { return this.slotId; }
			set { this.slotId = value; }
		}


		[Column(Order = 3)]
		[Required]
		public string Species
		{
			get { return this.species; }
			set { this.species = value; }
		}


		[Column(Order = 6)]
		public int Speed
		{
			get { return this.speed; }
			set { this.speed = value; }
		}


		[Column(Order = 5)]
		public int Strength
		{
			get { return this.strength; }
			set { this.strength = value; }
		}
		#endregion
	}
}