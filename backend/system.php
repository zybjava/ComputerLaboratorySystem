<?php
	class system{
		public $binary_array = "fghiedcba";//array("f", "g", "h", "i", "e", "d", "c", "b", "a");
		public $text;
		function __construct($text){
			$this->text = $text;
		}
		function to_binary($char){
			$text = ord($char);
			$result = "";
			$m = 1;
			while($m < $text || $m < 65){
				$m += $m;
			}
			while($text > 0){
				$result .= floor($text / $m);
				$text %= $m;
				$m /= 2;
			}
			while(strlen($result) < 8){
				$result .= "0";
			}
			return $result;
		}
		function encrypt_bin(){
			$bin = "";
			for($i = 0; $i < strlen($this->text); $i++){
				$bin .= $this->to_binary($this->text[$i]) . (($i < strlen($this->text) - 1) ? " " : "");
			}
			$binary = explode(" ", $bin);
			$bin = "";
			for($i = 0; $i < count($binary); $i++){
				$b = $binary[$i];
				for($j = 0; $j < strlen($b); $j++){
					if($b[$j] == "1"){
						$bin .= $this->binary_array[$j];
					}
				}
				$bin .= (($i < strlen($this->text) - 1) ? "j" : "");
			}
			return $bin;
		}
	}
?>