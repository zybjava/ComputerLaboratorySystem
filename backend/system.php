<?php
	class system{
		private $binary_array = array("f", "g", "h", "i", "e", "d", "c", "b", "a");
		private $binaries = array(128, 64, 32, 16, 8, 4, 2, 1);
		private $text;
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
		function from_binary($bins){
			$bin = explode(" ", $bins);
			$res = 0;
			for($i = 0; $i < count($bin); $i++){
				$b = $bin[$i];
				for($j = 0; $j < strlen($b); $j++){
					if($b[$j] == "1"){
						$res += $this->binaries[$j];
					}
				}
			}
			return chr($res);
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
		function decrypt_bin($encrypted){
			$text = explode("j", $encrypted);
			$bin = "";
			for($i = 0; $i < count($text); $i++){
				$b = str_split($text[$i], 1);
				for($j = 0; $j < count($this->binary_array); $j++){
					if(in_array($this->binary_array[$j], $b)){
						$bin .= "1";
					}else{
						$bin .= "0";
					}
				}
				$bin .= (($i < strlen($this->text) - 1) ? " " : "");
			}
			$bins = explode(" ", $bin);
			$bin = "";
			for($i = 0; $i < count($bins); $i++){
				$bin .= $this->from_binary($bins[$i]);
			}
			return $bin;
		}
	}
?>